import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стажироваться: PerfectVerb = {
  name: Word('стажироваться', 8),
  singular1stPerson: Word('стажируюсь', 6),
  singular2ndPerson: Word('стажируешься', 6),
  singular3rdPerson: Word('стажируется', 6),
  plural1stPerson: Word('стажируемся', 6),
  plural2ndPerson: Word('стажируетесь', 6),
  plural3rdPerson: Word('стажируются', 6),
  masculinePast: Word('стажировался', 8),
  femininePast: Word('стажировалась', 8),
  neuterPast: Word('стажировалось', 8),
  pluralPast: Word('стажировались', 8),
  imperativeInformal: Word('стажируйся', 6),
  imperativeFormal: Word('стажируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(стажироваться.name.text, стажироваться);

export { стажироваться };