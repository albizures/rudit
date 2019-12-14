import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const противостать: PerfectVerb = {
  name: Word('противостать', 9),
  singular1stPerson: Word('противостану', 9),
  singular2ndPerson: Word('противостанешь', 9),
  singular3rdPerson: Word('противостанет', 9),
  plural1stPerson: Word('противостанем', 9),
  plural2ndPerson: Word('противостанете', 9),
  plural3rdPerson: Word('противостанут', 9),
  masculinePast: Word('противостал', 9),
  femininePast: Word('противостала', 9),
  neuterPast: Word('противостало', 9),
  pluralPast: Word('противостали', 9),
  imperativeInformal: Word('противостань', 9),
  imperativeFormal: Word('противостаньте', 9),
  imperfect: [],
};

perfectVerbs.set(противостать.name.text, противостать);

export { противостать };