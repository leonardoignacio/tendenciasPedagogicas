const dataMapa = {
    id: "mapa",
    title: "2. Mapa de Empatia",
    duration: "10 min",
    icon: `<svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`,
    content: `
        <div class="bg-white rounded-xl shadow-sm p-6 border-t-4 border-brand-orange card-hover">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-brand-blue">O estudante "Acolhido, mas Evasivo"</h2>
                <span class="bg-orange-100 text-brand-orange font-bold px-3 py-1 rounded-full text-sm">Tempo: 10m</span>
            </div>
            
            <p class="text-gray-600 mb-8 text-lg">Usem a lente da <strong>Tendência Não Diretiva</strong> para <em>gerar insights em post-its e colem diretamente na lousa.</em></p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Coluna Dores -->
                <div class="border border-red-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div class="bg-red-50 p-5 rounded-t-xl border-b border-red-200">
                        <h3 class="font-bold text-red-700 flex items-center gap-2 text-xl">
                            <span class="text-2xl">💔</span> DORES
                        </h3>
                        <p class="text-sm text-red-600 mt-1 font-medium">O que ele pensa e sente, mas não conta?</p>
                    </div>
                    <div class="p-6 bg-white rounded-b-xl">
                        <ul class="text-base lg:text-lg text-gray-700 space-y-5 list-disc pl-5 leading-relaxed">
                            <li>Quais são as maiores insegurança dos estudantes em relação ao futuro?</li>
                            <li>Quais pontos da "prática escolar" podem sentir que não se conectam às suas vidas?</li>
                            <li>Qual peso ou pressão de fora da escola eles carregam em silêncio?</li>
                            <pre>
            .
            .
            .
                            </pre>
                        </ul>
                    </div>
                </div>

                <!-- Coluna Necessidades -->
                <div class="border border-green-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div class="bg-green-50 p-5 rounded-t-xl border-b border-green-200">
                        <h3 class="font-bold text-green-700 flex items-center gap-2 text-xl">
                            <span class="text-2xl">🎯</span> NECESSIDADES
                        </h3>
                        <p class="text-sm text-green-600 mt-1 font-medium">O que o faria ficar?(Intencionalidade)</p>
                    </div>
                    <div class="p-6 bg-white rounded-b-xl">
                        <ul class="text-base lg:text-lg text-gray-700 space-y-5 list-disc pl-5 leading-relaxed">
                        <li>O que daria sentido e propósito para os estudantes não desistirem?</li>
                            <li>Que tipo de escuta eles precisam que ainda não oferecemos?</li>
                            <li>Como os educadores podem atuar mais como "facilitadores"?</li>
                            <pre>
            .
            .
            .
                            </pre>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
};