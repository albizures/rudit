import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заделываться: PerfectVerb = {
  name: Word('заделываться', 3),
  singular1stPerson: Word('заделываюсь', 3),
  singular2ndPerson: Word('заделываешься', 3),
  singular3rdPerson: Word('заделывается', 3),
  plural1stPerson: Word('заделываемся', 3),
  plural2ndPerson: Word('заделываетесь', 3),
  plural3rdPerson: Word('заделываются', 3),
  masculinePast: Word('заделывался', 3),
  femininePast: Word('заделывалась', 3),
  neuterPast: Word('заделывалось', 3),
  pluralPast: Word('заделывались', 3),
  imperativeInformal: Word('заделывайся', 3),
  imperativeFormal: Word('заделывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(заделываться.name.text, заделываться);

export { заделываться };