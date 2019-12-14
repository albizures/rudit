import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задёргаться: PerfectVerb = {
  name: Word('задёргаться', 1),
  singular1stPerson: Word('задёргаюсь', 1),
  singular2ndPerson: Word('задёргаешься', 1),
  singular3rdPerson: Word('задёргается', 1),
  plural1stPerson: Word('задёргаемся', 1),
  plural2ndPerson: Word('задёргаетесь', 1),
  plural3rdPerson: Word('задёргаются', 1),
  masculinePast: Word('задёргался', 1),
  femininePast: Word('задёргалась', 1),
  neuterPast: Word('задёргалось', 1),
  pluralPast: Word('задёргались', 1),
  imperativeInformal: Word('задёргайся', 1),
  imperativeFormal: Word('задёргайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(задёргаться.name.text, задёргаться);

export { задёргаться };