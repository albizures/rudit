import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предоставиться: PerfectVerb = {
  name: Word('предоставиться', 7),
  singular1stPerson: Word('предоставлюсь', 7),
  singular2ndPerson: Word('предоставишься', 7),
  singular3rdPerson: Word('предоставится', 7),
  plural1stPerson: Word('предоставимся', 7),
  plural2ndPerson: Word('предоставитесь', 7),
  plural3rdPerson: Word('предоставятся', 7),
  masculinePast: Word('предоставился', 7),
  femininePast: Word('предоставилась', 7),
  neuterPast: Word('предоставилось', 7),
  pluralPast: Word('предоставились', 7),
  imperativeInformal: Word('предоставься', 7),
  imperativeFormal: Word('предоставьтесь', 7),
  imperfect: [],
};

perfectVerbs.set(предоставиться.name.text, предоставиться);

export { предоставиться };