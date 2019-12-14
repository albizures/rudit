import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опалубить: PerfectVerb = {
  name: Word('опалубить', 2),
  singular1stPerson: Word('опалублю', 2),
  singular2ndPerson: Word('опалубишь', 2),
  singular3rdPerson: Word('опалубит', 2),
  plural1stPerson: Word('опалубим', 2),
  plural2ndPerson: Word('опалубите', 2),
  plural3rdPerson: Word('опалубят', 2),
  masculinePast: Word('опалубил', 2),
  femininePast: Word('опалубила', 2),
  neuterPast: Word('опалубило', 2),
  pluralPast: Word('опалубили', 2),
  imperativeInformal: Word('опалуби//опа'лубь', 2),
  imperativeFormal: Word('опалубьте', 2),
  imperfect: [],
};

perfectVerbs.set(опалубить.name.text, опалубить);

export { опалубить };