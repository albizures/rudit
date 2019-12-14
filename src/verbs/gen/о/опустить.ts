import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опустить: PerfectVerb = {
  name: Word('опустить', 5),
  singular1stPerson: Word('опущу', 4),
  singular2ndPerson: Word('опустишь', 2),
  singular3rdPerson: Word('опустит', 2),
  plural1stPerson: Word('опустим', 2),
  plural2ndPerson: Word('опустите', 2),
  plural3rdPerson: Word('опустят', 2),
  masculinePast: Word('опустил', 5),
  femininePast: Word('опустила', 5),
  neuterPast: Word('опустило', 5),
  pluralPast: Word('опустили', 5),
  imperativeInformal: Word('опусти', 5),
  imperativeFormal: Word('опустите', 5),
  imperfect: ['опускать'],
};

perfectVerbs.set(опустить.name.text, опустить);

export { опустить };