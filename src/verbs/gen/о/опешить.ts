import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опешить: PerfectVerb = {
  name: Word('опешить', 2),
  singular1stPerson: Word('опешу', 2),
  singular2ndPerson: Word('опешишь', 2),
  singular3rdPerson: Word('опешит', 2),
  plural1stPerson: Word('опешим', 2),
  plural2ndPerson: Word('опешите', 2),
  plural3rdPerson: Word('опешат', 2),
  masculinePast: Word('опешил', 2),
  femininePast: Word('опешила', 2),
  neuterPast: Word('опешило', 2),
  pluralPast: Word('опешили', 2),
  imperativeInformal: Word('опешь', 2),
  imperativeFormal: Word('опешьте', 2),
  imperfect: [],
};

perfectVerbs.set(опешить.name.text, опешить);

export { опешить };