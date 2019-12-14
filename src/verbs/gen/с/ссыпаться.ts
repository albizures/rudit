import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссыпаться: PerfectVerb = {
  name: Word('ссыпаться', 2),
  singular1stPerson: Word('ссыплюсь', 2),
  singular2ndPerson: Word('ссыплешься', 2),
  singular3rdPerson: Word('ссыплется', 2),
  plural1stPerson: Word('ссыплемся', 2),
  plural2ndPerson: Word('ссыплетесь', 2),
  plural3rdPerson: Word('ссыплются', 2),
  masculinePast: Word('ссыпался', 2),
  femininePast: Word('ссыпалась', 2),
  neuterPast: Word('ссыпалось', 2),
  pluralPast: Word('ссыпались', 2),
  imperativeInformal: Word('ссыпься', 2),
  imperativeFormal: Word('ссыпьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(ссыпаться.name.text, ссыпаться);

export { ссыпаться };