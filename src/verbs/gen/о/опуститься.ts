import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опуститься: PerfectVerb = {
  name: Word('опуститься', 5),
  singular1stPerson: Word('опущусь', 4),
  singular2ndPerson: Word('опустишься', 2),
  singular3rdPerson: Word('опустится', 2),
  plural1stPerson: Word('опустимся', 2),
  plural2ndPerson: Word('опуститесь', 2),
  plural3rdPerson: Word('опустятся', 2),
  masculinePast: Word('опустился', 5),
  femininePast: Word('опустилась', 5),
  neuterPast: Word('опустилось', 5),
  pluralPast: Word('опустились', 5),
  imperativeInformal: Word('опустись', 5),
  imperativeFormal: Word('опуститесь', 5),
  imperfect: [],
};

perfectVerbs.set(опуститься.name.text, опуститься);

export { опуститься };