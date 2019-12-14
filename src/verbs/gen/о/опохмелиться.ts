import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опохмелиться: PerfectVerb = {
  name: Word('опохмелиться', 7),
  singular1stPerson: Word('опохмелюсь', 7),
  singular2ndPerson: Word('опохмелишься', 7),
  singular3rdPerson: Word('опохмелится', 7),
  plural1stPerson: Word('опохмелимся', 7),
  plural2ndPerson: Word('опохмелитесь', 7),
  plural3rdPerson: Word('опохмелятся', 7),
  masculinePast: Word('опохмелился', 7),
  femininePast: Word('опохмелилась', 7),
  neuterPast: Word('опохмелилось', 7),
  pluralPast: Word('опохмелились', 7),
  imperativeInformal: Word('опохмелись', 7),
  imperativeFormal: Word('опохмелитесь', 7),
  imperfect: ['похмеляться'],
};

perfectVerbs.set(опохмелиться.name.text, опохмелиться);

export { опохмелиться };