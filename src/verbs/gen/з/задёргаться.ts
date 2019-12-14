import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задёргаться: PerfectVerb = {
  name: Word('задёргаться', 3),
  singular1stPerson: Word('задёргаюсь', 3),
  singular2ndPerson: Word('задёргаешься', 3),
  singular3rdPerson: Word('задёргается', 3),
  plural1stPerson: Word('задёргаемся', 3),
  plural2ndPerson: Word('задёргаетесь', 3),
  plural3rdPerson: Word('задёргаются', 3),
  masculinePast: Word('задёргался', 3),
  femininePast: Word('задёргалась', 3),
  neuterPast: Word('задёргалось', 3),
  pluralPast: Word('задёргались', 3),
  imperativeInformal: Word('задёргайся', 3),
  imperativeFormal: Word('задёргайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(задёргаться.name.text, задёргаться);

export { задёргаться };