import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настать: PerfectVerb = {
  name: Word('настать', 4),
  singular1stPerson: Word('настану', 4),
  singular2ndPerson: Word('настанешь', 4),
  singular3rdPerson: Word('настанет', 4),
  plural1stPerson: Word('настанем', 4),
  plural2ndPerson: Word('настанете', 4),
  plural3rdPerson: Word('настанут', 4),
  masculinePast: Word('настал', 4),
  femininePast: Word('настала', 4),
  neuterPast: Word('настало', 4),
  pluralPast: Word('настали', 4),
  imperativeInformal: Word('настань', 4),
  imperativeFormal: Word('настаньте', 4),
  imperfect: [],
};

perfectVerbs.set(настать.name.text, настать);

export { настать };