import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мять: PerfectVerb = {
  name: Word('мять', 1),
  singular1stPerson: Word('мну', 2),
  singular2ndPerson: Word('мнёшь', 2),
  singular3rdPerson: Word('мнёт', 2),
  plural1stPerson: Word('мнём', 2),
  plural2ndPerson: Word('мнёте', 2),
  plural3rdPerson: Word('мнут', 2),
  masculinePast: Word('мял', 1),
  femininePast: Word('мяла', 1),
  neuterPast: Word('мяло', 1),
  pluralPast: Word('мяли', 1),
  imperativeInformal: Word('мни', 2),
  imperativeFormal: Word('мните', 2),
  imperfect: ['помять','измять','смять'],
};

perfectVerbs.set(мять.name.text, мять);

export { мять };