import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опомниться: PerfectVerb = {
  name: Word('опомниться', 2),
  singular1stPerson: Word('опомнюсь', 2),
  singular2ndPerson: Word('опомнишься', 2),
  singular3rdPerson: Word('опомнится', 2),
  plural1stPerson: Word('опомнимся', 2),
  plural2ndPerson: Word('опомнитесь', 2),
  plural3rdPerson: Word('опомнятся', 2),
  masculinePast: Word('опомнился', 2),
  femininePast: Word('опомнилась', 2),
  neuterPast: Word('опомнилось', 2),
  pluralPast: Word('опомнились', 2),
  imperativeInformal: Word('опомнись', 2),
  imperativeFormal: Word('опомнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(опомниться.name.text, опомниться);

export { опомниться };