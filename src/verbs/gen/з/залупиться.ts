import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залупиться: PerfectVerb = {
  name: Word('залупиться', 5),
  singular1stPerson: Word('залуплюсь', 6),
  singular2ndPerson: Word('залупишься', 3),
  singular3rdPerson: Word('залупится', 3),
  plural1stPerson: Word('залупимся', 3),
  plural2ndPerson: Word('залупитесь', 3),
  plural3rdPerson: Word('залупятся', 3),
  masculinePast: Word('залупился', 5),
  femininePast: Word('залупилась', 5),
  neuterPast: Word('залупилось', 5),
  pluralPast: Word('залупились', 5),
  imperativeInformal: Word('залупись', 5),
  imperativeFormal: Word('залупитесь', 5),
  imperfect: [],
};

perfectVerbs.set(залупиться.name.text, залупиться);

export { залупиться };