import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пить: PerfectVerb = {
  name: Word('пить', 1),
  singular1stPerson: Word('пью', 2),
  singular2ndPerson: Word('пьёшь', 2),
  singular3rdPerson: Word('пьёт', 2),
  plural1stPerson: Word('пьём', 2),
  plural2ndPerson: Word('пьёте', 4),
  plural3rdPerson: Word('пьют', 2),
  masculinePast: Word('пил', 1),
  femininePast: Word('пила', 3),
  neuterPast: Word('пило', 1),
  pluralPast: Word('пили', 1),
  imperativeInformal: Word('пей', 1),
  imperativeFormal: Word('пейте', 1),
  imperfect: ['выпить','попить'],
};

perfectVerbs.set(пить.name.text, пить);

export { пить };