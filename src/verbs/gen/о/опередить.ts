import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опередить: PerfectVerb = {
  name: Word('опередить', 6),
  singular1stPerson: Word('опережу', 6),
  singular2ndPerson: Word('опередишь', 6),
  singular3rdPerson: Word('опередит', 6),
  plural1stPerson: Word('опередим', 6),
  plural2ndPerson: Word('опередите', 6),
  plural3rdPerson: Word('опередят', 6),
  masculinePast: Word('опередил', 6),
  femininePast: Word('опередила', 6),
  neuterPast: Word('опередило', 6),
  pluralPast: Word('опередили', 6),
  imperativeInformal: Word('опереди', 6),
  imperativeFormal: Word('опередите', 6),
  imperfect: ['опережать'],
};

perfectVerbs.set(опередить.name.text, опередить);

export { опередить };