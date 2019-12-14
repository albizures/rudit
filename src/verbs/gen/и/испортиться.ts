import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испортиться: PerfectVerb = {
  name: Word('испортиться', 3),
  singular1stPerson: Word('испорчусь', 3),
  singular2ndPerson: Word('испортишься', 3),
  singular3rdPerson: Word('испортится', 3),
  plural1stPerson: Word('испортимся', 3),
  plural2ndPerson: Word('испортитесь', 3),
  plural3rdPerson: Word('испортятся', 3),
  masculinePast: Word('испортился', 3),
  femininePast: Word('испортилась', 3),
  neuterPast: Word('испортилось', 3),
  pluralPast: Word('испортились', 3),
  imperativeInformal: Word('испортись//испо'рться', 3),
  imperativeFormal: Word('испортитесь//испо'ртьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(испортиться.name.text, испортиться);

export { испортиться };