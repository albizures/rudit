import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ассимилироваться: PerfectVerb = {
  name: Word('ассимилироваться', 7),
  singular1stPerson: Word('ассимилируюсь', 7),
  singular2ndPerson: Word('ассимилируешься', 7),
  singular3rdPerson: Word('ассимилируется', 7),
  plural1stPerson: Word('ассимилируемся', 7),
  plural2ndPerson: Word('ассимилируетесь', 7),
  plural3rdPerson: Word('ассимилируются', 7),
  masculinePast: Word('ассимилировался', 7),
  femininePast: Word('ассимилировалась', 7),
  neuterPast: Word('ассимилировалось', 7),
  pluralPast: Word('ассимилировались', 7),
  imperativeInformal: Word('ассимилируйся', 7),
  imperativeFormal: Word('ассимилируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(ассимилироваться.name.text, ассимилироваться);

export { ассимилироваться };