const dataEntrega = {
    id: "entrega",
    title: "3. Produção Gráfica",
    duration: "20 min",
    icon: `<svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`,
    content: `
        <div class="bg-white rounded-xl shadow-sm p-6 lg:p-8 border-t-4 border-brand-blue card-hover">
            <h2 class="text-2xl font-bold text-brand-blue mb-4">Síntese e Entrega</h2>
            <p class="text-gray-600 mb-6 text-lg"><strong>Contrução Coletiva - Tendência Renovadora Não Diretiva</strong><br> Organize o grupo para otimizar o tempo restante...</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                <div class="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm relative">
                    <div class="absolute -top-4 -left-4 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">1</div>
                    <h3 class="font-bold text-gray-800 mb-3 ml-4 text-lg">Resultado da Pesquisa - Pitch(5m)</h3>
                    - Apresentem o conceito <strong> - citem as fontes</strong>.<br>
                    - Meditem nos insights do <strong>Mapa de Empatia</strong><br>
                    - Amarre tudo com as <strong>perguntas norteadoras</strong>.</p><br>
                    <div class="bg-white p-4 rounded border text-sm text-gray-600 italic shadow-sm">
                        <strong class="text-gray-700">Checklist: Perguntas Norteadoras</strong>...<br> 
                        Papel da escola... Centro do Processo... Ocorre Aprendizagem... Papel do Docente... Papel do estudante.<br>
                    </div>
                </div>

                <div class="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm relative">
                    <div class="absolute -top-4 -left-4 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">2</div>
                    <h3 class="font-bold text-gray-800 mb-3 ml-4 text-lg">Produção Gráfica(Painel)</h3>
                    <p class="text-base text-gray-600 mb-4">Materialize os <strong>sentimentos/pensamentos/inquietações em ARTE</strong>, produzindo uma <strong>representação gráfica</strong> sobre o tema, que irá compor o <strong>Mural de Tendências Pedagógicas Brasileiras!</strong></p>
                    
                    <!-- Controle do Mediador (Oculto por padrão) -->
                    <div class="mt-4 pt-4 border-t border-gray-200">
                        <button onclick="window.toggleMetaphors()" class="text-xs font-semibold bg-gray-200 hover:bg-gray-300 text-gray-600 py-1.5 px-3 rounded flex items-center gap-2 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            
                        </button>
                        
                        <div id="metaphors-container" class="hidden mt-3 flex gap-2 flex-wrap transition-all">
                            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded border border-blue-200">🌿 Semente/Solo</span>
                            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded border border-blue-200">🪞 Espelho Reflexivo</span>
                            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded border border-blue-200">🧭 Bússola</span>
                            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded border border-blue-200">🌉 Ponte/Andaime</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};