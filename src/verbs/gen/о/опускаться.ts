import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опускаться: PerfectVerb = {
  name: Word('опускаться', 5),
  singular1stPerson: Word('опускаюсь', 5),
  singular2ndPerson: Word('опускаешься', 5),
  singular3rdPerson: Word('опускается', 5),
  plural1stPerson: Word('опускаемся', 5),
  plural2ndPerson: Word('опускаетесь', 5),
  plural3rdPerson: Word('опускаются', 5),
  masculinePast: Word('опускался', 5),
  femininePast: Word('опускалась', 5),
  neuterPast: Word('опускалось', 5),
  pluralPast: Word('опускались', 5),
  imperativeInformal: Word('опускайся', 5),
  imperativeFormal: Word('опускайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(опускаться.name.text, опускаться);

export { опускаться };