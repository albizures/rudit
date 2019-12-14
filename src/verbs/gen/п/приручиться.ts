import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приручиться: PerfectVerb = {
  name: Word('приручиться', 6),
  singular1stPerson: Word('приручусь', 6),
  singular2ndPerson: Word('приручишься', 6),
  singular3rdPerson: Word('приручится', 6),
  plural1stPerson: Word('приручимся', 6),
  plural2ndPerson: Word('приручитесь', 6),
  plural3rdPerson: Word('приручатся', 6),
  masculinePast: Word('приручился', 6),
  femininePast: Word('приручилась', 6),
  neuterPast: Word('приручилось', 6),
  pluralPast: Word('приручились', 6),
  imperativeInformal: Word('приручись', 6),
  imperativeFormal: Word('приручитесь', 6),
  imperfect: [],
};

perfectVerbs.set(приручиться.name.text, приручиться);

export { приручиться };