const dataIntro = {
    id: "intro",
    title: "1. Contextualização",
    duration: "10 min",
    icon: `<svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    content: `
        <div class="bg-white rounded-xl shadow-sm p-6 lg:p-8 border-t-4 border-brand-blue card-hover">
            <h2 class="text-2xl font-bold text-brand-blue mb-2">Tendência Renovadora Não Diretiva</h2>
            <p class="text-gray-600 mb-8 text-lg">Nossa missão é compreender como <strong>Tendência Renovadora Não Diretiva</strong> está presente na metodologia do Senac e pode ajudar na <strong>gestão da permanência</stron>.</p>
            
            <!-- Acordeon 1 -->
            <details class="group bg-blue-50 rounded-lg border border-blue-200 mb-4 cursor-pointer overflow-hidden transition-all duration-300 open:shadow-md">
                <summary class="font-bold text-brand-blue p-4 flex justify-between items-center select-none">
                    <span class="flex items-center gap-3">
                        <span class="bg-blue-200 text-brand-blue w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span> 
                        Leitura individual - 5m
                    </span>
                    <svg class="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </summary>
                <div class="p-5 border-t border-blue-200 bg-white">
                    <p class="text-gray-600 mb-3 font-medium">Reflita intimamente sobre as perguntas norteadoras:</p>
                    <ul class="space-y-3 text-gray-700 ml-2">
                        <li class="flex gap-2"><span>•</span> Qual o papel da escola?</li>
                        <li class="flex gap-2"><span>•</span> Quem é o centro do processo?</li>
                        <li class="flex gap-2"><span>•</span> Como ocorre a aprendizagem?</li>
                        <li class="flex gap-2"><span>•</span> Qual o papel do professor?</li>
                        <li class="flex gap-2"><span>•</span> Como seria uma aula nessa perspectiva?</li>
                    </ul>
                </div>
            </details>

            <!-- Acordeon 2 -->
            <details class="group bg-orange-50 rounded-lg border border-orange-200 cursor-pointer overflow-hidden transition-all duration-300 open:shadow-md">
                <summary class="font-bold text-brand-orange p-4 flex justify-between items-center select-none">
                    <span class="flex items-center gap-3">
                        <span class="bg-orange-200 text-brand-orange w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span> 
                        Roda de Conversa - 5m
                    </span>
                    <svg class="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </summary>
                <div class="p-5 border-t border-orange-200 bg-white">
                    <div class="flex items-start gap-4">
                        <svg class="w-8 h-8 text-brand-orange shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                        <div>
                            <p class="text-gray-700 text-lg">Compartilhe e consolide com o grupo as percepções que surgiram durante a reflexão individual. Lembre-se: não há respostas erradas, a essência é a escuta ativa e a empatia.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    `
};