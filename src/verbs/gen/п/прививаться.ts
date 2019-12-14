import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прививаться: PerfectVerb = {
  name: Word('прививаться', 6),
  singular1stPerson: Word('прививаюсь', 6),
  singular2ndPerson: Word('прививаешься', 6),
  singular3rdPerson: Word('прививается', 6),
  plural1stPerson: Word('прививаемся', 6),
  plural2ndPerson: Word('прививаетесь', 6),
  plural3rdPerson: Word('прививаются', 6),
  masculinePast: Word('прививался', 6),
  femininePast: Word('прививалась', 6),
  neuterPast: Word('прививалось', 6),
  pluralPast: Word('прививались', 6),
  imperativeInformal: Word('прививайся', 6),
  imperativeFormal: Word('прививайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прививаться.name.text, прививаться);

export { прививаться };