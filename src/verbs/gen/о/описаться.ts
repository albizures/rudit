import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const описаться: PerfectVerb = {
  name: Word('описаться', 4),
  singular1stPerson: Word('опишусь', 4),
  singular2ndPerson: Word('опишешься', 2),
  singular3rdPerson: Word('опишется', 2),
  plural1stPerson: Word('опишемся', 2),
  plural2ndPerson: Word('опишетесь', 2),
  plural3rdPerson: Word('опишутся', 2),
  masculinePast: Word('описался', 4),
  femininePast: Word('описалась', 4),
  neuterPast: Word('описалось', 4),
  pluralPast: Word('описались', 4),
  imperativeInformal: Word('опишись', 4),
  imperativeFormal: Word('опишитесь', 4),
  imperfect: [],
};

perfectVerbs.set(описаться.name.text, описаться);

export { описаться };