import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гранулироваться: PerfectVerb = {
  name: Word('гранулироваться', 6),
  singular1stPerson: Word('гранулируюсь', 6),
  singular2ndPerson: Word('гранулируешься', 6),
  singular3rdPerson: Word('гранулируется', 6),
  plural1stPerson: Word('гранулируемся', 6),
  plural2ndPerson: Word('гранулируетесь', 6),
  plural3rdPerson: Word('гранулируются', 6),
  masculinePast: Word('гранулировался', 6),
  femininePast: Word('гранулировалась', 6),
  neuterPast: Word('гранулировалось', 6),
  pluralPast: Word('гранулировались', 6),
  imperativeInformal: Word('гранулируйся', 6),
  imperativeFormal: Word('гранулируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(гранулироваться.name.text, гранулироваться);

export { гранулироваться };