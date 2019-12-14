import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const роиться: PerfectVerb = {
  name: Word('роиться', 2),
  singular1stPerson: Word('роюсь', 2),
  singular2ndPerson: Word('роишься', 2),
  singular3rdPerson: Word('роится', 2),
  plural1stPerson: Word('роимся', 2),
  plural2ndPerson: Word('роитесь', 2),
  plural3rdPerson: Word('роятся', 2),
  masculinePast: Word('роился', 2),
  femininePast: Word('роилась', 2),
  neuterPast: Word('роилось', 2),
  pluralPast: Word('роились', 2),
  imperativeInformal: Word('роись', 2),
  imperativeFormal: Word('роитесь', 2),
  imperfect: [],
};

perfectVerbs.set(роиться.name.text, роиться);

export { роиться };