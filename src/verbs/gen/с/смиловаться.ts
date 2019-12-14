import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смиловаться: PerfectVerb = {
  name: Word('смиловаться', 2),
  singular1stPerson: Word('смилуюсь', 2),
  singular2ndPerson: Word('смилуешься', 2),
  singular3rdPerson: Word('смилуется', 2),
  plural1stPerson: Word('смилуемся', 2),
  plural2ndPerson: Word('смилуетесь', 2),
  plural3rdPerson: Word('смилуются', 2),
  masculinePast: Word('смиловался', 2),
  femininePast: Word('смиловалась', 2),
  neuterPast: Word('смиловалось', 2),
  pluralPast: Word('смиловались', 2),
  imperativeInformal: Word('смилуйся', 2),
  imperativeFormal: Word('смилуйтесь', 2),
  imperfect: [],
};

perfectVerbs.set(смиловаться.name.text, смиловаться);

export { смиловаться };