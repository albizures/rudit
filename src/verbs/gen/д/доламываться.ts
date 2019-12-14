import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доламываться: PerfectVerb = {
  name: Word('доламываться', 3),
  singular1stPerson: Word('доламываюсь', 3),
  singular2ndPerson: Word('доламываешься', 3),
  singular3rdPerson: Word('доламывается', 3),
  plural1stPerson: Word('доламываемся', 3),
  plural2ndPerson: Word('доламываетесь', 3),
  plural3rdPerson: Word('доламываются', 3),
  masculinePast: Word('доламывался', 3),
  femininePast: Word('доламывалась', 3),
  neuterPast: Word('доламывалось', 3),
  pluralPast: Word('доламывались', 3),
  imperativeInformal: Word('доламывайся', 3),
  imperativeFormal: Word('доламывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(доламываться.name.text, доламываться);

export { доламываться };