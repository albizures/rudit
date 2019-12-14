import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опоясаться: PerfectVerb = {
  name: Word('опоясаться', 3),
  singular1stPerson: Word('опояшусь', 3),
  singular2ndPerson: Word('опояшешься', 3),
  singular3rdPerson: Word('опояшется', 3),
  plural1stPerson: Word('опояшемся', 3),
  plural2ndPerson: Word('опояшетесь', 3),
  plural3rdPerson: Word('опояшутся', 3),
  masculinePast: Word('опоясался', 3),
  femininePast: Word('опоясалась', 3),
  neuterPast: Word('опоясалось', 3),
  pluralPast: Word('опоясались', 3),
  imperativeInformal: Word('опояшься', 3),
  imperativeFormal: Word('опояшьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(опоясаться.name.text, опоясаться);

export { опоясаться };