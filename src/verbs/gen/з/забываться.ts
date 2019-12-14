import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забываться: PerfectVerb = {
  name: Word('забываться', 5),
  singular1stPerson: Word('забываюсь', 5),
  singular2ndPerson: Word('забываешься', 5),
  singular3rdPerson: Word('забывается', 5),
  plural1stPerson: Word('забываемся', 5),
  plural2ndPerson: Word('забываетесь', 5),
  plural3rdPerson: Word('забываются', 5),
  masculinePast: Word('забывался', 5),
  femininePast: Word('забывалась', 5),
  neuterPast: Word('забывалось', 5),
  pluralPast: Word('забывались', 5),
  imperativeInformal: Word('забывайся', 5),
  imperativeFormal: Word('забывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(забываться.name.text, забываться);

export { забываться };