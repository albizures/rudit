import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опошлить: PerfectVerb = {
  name: Word('опошлить', 2),
  singular1stPerson: Word('опошлю', 2),
  singular2ndPerson: Word('опошлишь', 2),
  singular3rdPerson: Word('опошлит', 2),
  plural1stPerson: Word('опошлим', 2),
  plural2ndPerson: Word('опошлите', 2),
  plural3rdPerson: Word('опошлят', 2),
  masculinePast: Word('опошлил', 2),
  femininePast: Word('опошлила', 2),
  neuterPast: Word('опошлило', 2),
  pluralPast: Word('опошлили', 2),
  imperativeInformal: Word('опошли', 2),
  imperativeFormal: Word('опошлите', 2),
  imperfect: [],
};

perfectVerbs.set(опошлить.name.text, опошлить);

export { опошлить };