import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заволноваться: PerfectVerb = {
  name: Word('заволноваться', 8),
  singular1stPerson: Word('заволнуюсь', 6),
  singular2ndPerson: Word('заволнуешься', 6),
  singular3rdPerson: Word('заволнуется', 6),
  plural1stPerson: Word('заволнуемся', 6),
  plural2ndPerson: Word('заволнуетесь', 6),
  plural3rdPerson: Word('заволнуются', 6),
  masculinePast: Word('заволновался', 8),
  femininePast: Word('заволновалась', 8),
  neuterPast: Word('заволновалось', 8),
  pluralPast: Word('заволновались', 8),
  imperativeInformal: Word('заволнуйся', 6),
  imperativeFormal: Word('заволнуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(заволноваться.name.text, заволноваться);

export { заволноваться };