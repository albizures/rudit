import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задымиться: PerfectVerb = {
  name: Word('задымиться', 5),
  singular1stPerson: Word('задымлюсь', 6),
  singular2ndPerson: Word('задымишься', 5),
  singular3rdPerson: Word('задымится', 5),
  plural1stPerson: Word('задымимся', 5),
  plural2ndPerson: Word('задымитесь', 5),
  plural3rdPerson: Word('задымятся', 5),
  masculinePast: Word('задымился', 5),
  femininePast: Word('задымилась', 5),
  neuterPast: Word('задымилось', 5),
  pluralPast: Word('задымились', 5),
  imperativeInformal: Word('задымись', 5),
  imperativeFormal: Word('задымитесь', 5),
  imperfect: [],
};

perfectVerbs.set(задымиться.name.text, задымиться);

export { задымиться };