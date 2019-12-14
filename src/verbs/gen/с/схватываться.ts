import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const схватываться: PerfectVerb = {
  name: Word('схватываться', 3),
  singular1stPerson: Word('схватываюсь', 3),
  singular2ndPerson: Word('схватываешься', 3),
  singular3rdPerson: Word('схватывается', 3),
  plural1stPerson: Word('схватываемся', 3),
  plural2ndPerson: Word('схватываетесь', 3),
  plural3rdPerson: Word('схватываются', 3),
  masculinePast: Word('схватывался', 3),
  femininePast: Word('схватывалась', 3),
  neuterPast: Word('схватывалось', 3),
  pluralPast: Word('схватывались', 3),
  imperativeInformal: Word('схватывайся', 3),
  imperativeFormal: Word('схватывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(схватываться.name.text, схватываться);

export { схватываться };