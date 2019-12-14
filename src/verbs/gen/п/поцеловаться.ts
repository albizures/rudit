import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поцеловаться: PerfectVerb = {
  name: Word('поцеловаться', 7),
  singular1stPerson: Word('поцелуюсь', 5),
  singular2ndPerson: Word('поцелуешься', 5),
  singular3rdPerson: Word('поцелуется', 5),
  plural1stPerson: Word('поцелуемся', 5),
  plural2ndPerson: Word('поцелуетесь', 5),
  plural3rdPerson: Word('поцелуются', 5),
  masculinePast: Word('поцеловался', 7),
  femininePast: Word('поцеловалась', 7),
  neuterPast: Word('поцеловалось', 7),
  pluralPast: Word('поцеловались', 7),
  imperativeInformal: Word('поцелуйся', 5),
  imperativeFormal: Word('поцелуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(поцеловаться.name.text, поцеловаться);

export { поцеловаться };