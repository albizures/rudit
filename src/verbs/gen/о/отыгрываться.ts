import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отыгрываться: PerfectVerb = {
  name: Word('отыгрываться', 2),
  singular1stPerson: Word('отыгрываюсь', 2),
  singular2ndPerson: Word('отыгрываешься', 2),
  singular3rdPerson: Word('отыгрывается', 2),
  plural1stPerson: Word('отыгрываемся', 2),
  plural2ndPerson: Word('отыгрываетесь', 2),
  plural3rdPerson: Word('отыгрываются', 2),
  masculinePast: Word('отыгрывался', 2),
  femininePast: Word('отыгрывалась', 2),
  neuterPast: Word('отыгрывалось', 2),
  pluralPast: Word('отыгрывались', 2),
  imperativeInformal: Word('отыгрывайся', 2),
  imperativeFormal: Word('отыгрывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(отыгрываться.name.text, отыгрываться);

export { отыгрываться };