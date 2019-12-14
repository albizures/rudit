import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сыпаться: PerfectVerb = {
  name: Word('сыпаться', 1),
  singular1stPerson: Word('сыплюсь', 1),
  singular2ndPerson: Word('сыплешься', 1),
  singular3rdPerson: Word('сыплется', 1),
  plural1stPerson: Word('сыплемся', 1),
  plural2ndPerson: Word('сыплетесь', 1),
  plural3rdPerson: Word('сыплются', 1),
  masculinePast: Word('сыпался', 1),
  femininePast: Word('сыпалась', 1),
  neuterPast: Word('сыпалось', 1),
  pluralPast: Word('сыпались', 1),
  imperativeInformal: Word('сыпься', 1),
  imperativeFormal: Word('сыпьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(сыпаться.name.text, сыпаться);

export { сыпаться };