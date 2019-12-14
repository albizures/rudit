import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пришить: PerfectVerb = {
  name: Word('пришить', 4),
  singular1stPerson: Word('пришью', 5),
  singular2ndPerson: Word('пришьёшь', 5),
  singular3rdPerson: Word('пришьёт', 5),
  plural1stPerson: Word('пришьём', 5),
  plural2ndPerson: Word('пришьёте', 5),
  plural3rdPerson: Word('пришьют', 5),
  masculinePast: Word('пришил', 4),
  femininePast: Word('пришила', 4),
  neuterPast: Word('пришило', 4),
  pluralPast: Word('пришили', 4),
  imperativeInformal: Word('пришей', 4),
  imperativeFormal: Word('пришейте', 4),
  imperfect: [],
};

perfectVerbs.set(пришить.name.text, пришить);

export { пришить };