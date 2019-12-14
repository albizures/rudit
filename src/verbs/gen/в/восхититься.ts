import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восхититься: PerfectVerb = {
  name: Word('восхититься', 6),
  singular1stPerson: Word('восхищусь', 6),
  singular2ndPerson: Word('восхитишься', 6),
  singular3rdPerson: Word('восхитится', 6),
  plural1stPerson: Word('восхитимся', 6),
  plural2ndPerson: Word('восхититесь', 6),
  plural3rdPerson: Word('восхитятся', 6),
  masculinePast: Word('восхитился', 6),
  femininePast: Word('восхитилась', 6),
  neuterPast: Word('восхитилось', 6),
  pluralPast: Word('восхитились', 6),
  imperativeInformal: Word('восхитись', 6),
  imperativeFormal: Word('восхититесь', 6),
  imperfect: [],
};

perfectVerbs.set(восхититься.name.text, восхититься);

export { восхититься };