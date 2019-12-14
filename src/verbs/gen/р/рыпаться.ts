import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыпаться: PerfectVerb = {
  name: Word('рыпаться', 1),
  singular1stPerson: Word('рыпаюсь', 1),
  singular2ndPerson: Word('рыпаешься', 1),
  singular3rdPerson: Word('рыпается', 1),
  plural1stPerson: Word('рыпаемся', 1),
  plural2ndPerson: Word('рыпаетесь', 1),
  plural3rdPerson: Word('рыпаются', 1),
  masculinePast: Word('рыпался', 1),
  femininePast: Word('рыпалась', 1),
  neuterPast: Word('рыпалось', 1),
  pluralPast: Word('рыпались', 1),
  imperativeInformal: Word('рыпайся', 1),
  imperativeFormal: Word('рыпайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(рыпаться.name.text, рыпаться);

export { рыпаться };