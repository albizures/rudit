import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расцеловаться: PerfectVerb = {
  name: Word('расцеловаться', 8),
  singular1stPerson: Word('расцелуюсь', 6),
  singular2ndPerson: Word('расцелуешься', 6),
  singular3rdPerson: Word('расцелуется', 6),
  plural1stPerson: Word('расцелуемся', 6),
  plural2ndPerson: Word('расцелуетесь', 6),
  plural3rdPerson: Word('расцелуются', 6),
  masculinePast: Word('расцеловался', 8),
  femininePast: Word('расцеловалась', 8),
  neuterPast: Word('расцеловалось', 8),
  pluralPast: Word('расцеловались', 8),
  imperativeInformal: Word('расцелуйся', 6),
  imperativeFormal: Word('расцелуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(расцеловаться.name.text, расцеловаться);

export { расцеловаться };