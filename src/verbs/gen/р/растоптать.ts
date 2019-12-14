import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растоптать: PerfectVerb = {
  name: Word('растоптать', 7),
  singular1stPerson: Word('растопчу', 7),
  singular2ndPerson: Word('растопчешь', 4),
  singular3rdPerson: Word('растопчет', 4),
  plural1stPerson: Word('растопчем', 4),
  plural2ndPerson: Word('растопчете', 4),
  plural3rdPerson: Word('растопчут', 4),
  masculinePast: Word('растоптал', 7),
  femininePast: Word('растоптала', 7),
  neuterPast: Word('растоптало', 7),
  pluralPast: Word('растоптали', 7),
  imperativeInformal: Word('растопчи', 7),
  imperativeFormal: Word('растопчите', 7),
  imperfect: [],
};

perfectVerbs.set(растоптать.name.text, растоптать);

export { растоптать };