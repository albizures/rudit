import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслоняться: PerfectVerb = {
  name: Word('заслоняться', 6),
  singular1stPerson: Word('заслоняюсь', 6),
  singular2ndPerson: Word('заслоняешься', 6),
  singular3rdPerson: Word('заслоняется', 6),
  plural1stPerson: Word('заслоняемся', 6),
  plural2ndPerson: Word('заслоняетесь', 6),
  plural3rdPerson: Word('заслоняются', 6),
  masculinePast: Word('заслонялся', 6),
  femininePast: Word('заслонялась', 6),
  neuterPast: Word('заслонялось', 6),
  pluralPast: Word('заслонялись', 6),
  imperativeInformal: Word('заслоняйся', 6),
  imperativeFormal: Word('заслоняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(заслоняться.name.text, заслоняться);

export { заслоняться };