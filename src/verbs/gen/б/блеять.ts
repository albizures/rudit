import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блеять: PerfectVerb = {
  name: Word('блеять', 2),
  singular1stPerson: Word('блею', 2),
  singular2ndPerson: Word('блеешь', 2),
  singular3rdPerson: Word('блеет', 2),
  plural1stPerson: Word('блеем', 2),
  plural2ndPerson: Word('блеете', 2),
  plural3rdPerson: Word('блеют', 2),
  masculinePast: Word('блеял', 2),
  femininePast: Word('блеяла', 2),
  neuterPast: Word('блеяло', 2),
  pluralPast: Word('блеяли', 2),
  imperativeInformal: Word('блей', 2),
  imperativeFormal: Word('блейте', 2),
  imperfect: ['заблеять'],
};

perfectVerbs.set(блеять.name.text, блеять);

export { блеять };