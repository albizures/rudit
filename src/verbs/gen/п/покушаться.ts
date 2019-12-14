import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покушаться: PerfectVerb = {
  name: Word('покушаться', 5),
  singular1stPerson: Word('покушаюсь', 5),
  singular2ndPerson: Word('покушаешься', 5),
  singular3rdPerson: Word('покушается', 5),
  plural1stPerson: Word('покушаемся', 5),
  plural2ndPerson: Word('покушаетесь', 5),
  plural3rdPerson: Word('покушаются', 5),
  masculinePast: Word('покушался', 5),
  femininePast: Word('покушалась', 5),
  neuterPast: Word('покушалось', 5),
  pluralPast: Word('покушались', 5),
  imperativeInformal: Word('покушайся', 5),
  imperativeFormal: Word('покушайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(покушаться.name.text, покушаться);

export { покушаться };