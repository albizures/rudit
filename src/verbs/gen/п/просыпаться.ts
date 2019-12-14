import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просыпаться: PerfectVerb = {
  name: Word('просыпаться', 4),
  singular1stPerson: Word('просыплюсь', 4),
  singular2ndPerson: Word('просыплешься', 4),
  singular3rdPerson: Word('просыплется', 4),
  plural1stPerson: Word('просыплемся', 4),
  plural2ndPerson: Word('просыплетесь', 4),
  plural3rdPerson: Word('просыплются', 4),
  masculinePast: Word('просыпался', 4),
  femininePast: Word('просыпалась', 4),
  neuterPast: Word('просыпалось', 4),
  pluralPast: Word('просыпались', 4),
  imperativeInformal: Word('просыплпься', 4),
  imperativeFormal: Word('просыплпьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(просыпаться.name.text, просыпаться);

export { просыпаться };