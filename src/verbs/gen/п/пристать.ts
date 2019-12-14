import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристать: PerfectVerb = {
  name: Word('пристать', 5),
  singular1stPerson: Word('пристану', 5),
  singular2ndPerson: Word('пристанешь', 5),
  singular3rdPerson: Word('пристанет', 5),
  plural1stPerson: Word('пристанем', 5),
  plural2ndPerson: Word('пристанете', 5),
  plural3rdPerson: Word('пристанут', 5),
  masculinePast: Word('пристал', 5),
  femininePast: Word('пристала', 5),
  neuterPast: Word('пристало', 5),
  pluralPast: Word('пристали', 5),
  imperativeInformal: Word('пристань', 5),
  imperativeFormal: Word('пристаньте', 5),
  imperfect: [],
};

perfectVerbs.set(пристать.name.text, пристать);

export { пристать };