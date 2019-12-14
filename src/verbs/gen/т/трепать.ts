import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трепать: PerfectVerb = {
  name: Word('трепать', 4),
  singular1stPerson: Word('треплю', 5),
  singular2ndPerson: Word('треплешь', 2),
  singular3rdPerson: Word('треплет', 2),
  plural1stPerson: Word('треплем', 2),
  plural2ndPerson: Word('треплете', 2),
  plural3rdPerson: Word('треплют', 2),
  masculinePast: Word('трепал', 4),
  femininePast: Word('трепала', 4),
  neuterPast: Word('трепало', 4),
  pluralPast: Word('трепали', 4),
  imperativeInformal: Word('трепли', 5),
  imperativeFormal: Word('треплите', 5),
  imperfect: [],
};

perfectVerbs.set(трепать.name.text, трепать);

export { трепать };