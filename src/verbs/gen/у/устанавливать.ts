import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устанавливать: PerfectVerb = {
  name: Word('устанавливать', 5),
  singular1stPerson: Word('Устанаввливаю', 5),
  singular2ndPerson: Word('Устанаввливаешь', 5),
  singular3rdPerson: Word('Устанаввливает', 5),
  plural1stPerson: Word('Устанаввливаем', 5),
  plural2ndPerson: Word('Устанаввливаете', 5),
  plural3rdPerson: Word('Устанаввливают', 5),
  masculinePast: Word('', -1),
  femininePast: Word('', -1),
  neuterPast: Word('', -1),
  pluralPast: Word('', -1),
  imperativeInformal: Word('', -1),
  imperativeFormal: Word('', -1),
  imperfect: ['установить'],
};

perfectVerbs.set(устанавливать.name.text, устанавливать);

export { устанавливать };