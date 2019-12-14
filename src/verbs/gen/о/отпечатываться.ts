import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпечатываться: PerfectVerb = {
  name: Word('отпечатываться', 5),
  singular1stPerson: Word('отпечатываюсь', 5),
  singular2ndPerson: Word('отпечатываешься', 5),
  singular3rdPerson: Word('отпечатывается', 5),
  plural1stPerson: Word('отпечатываемся', 5),
  plural2ndPerson: Word('отпечатываетесь', 5),
  plural3rdPerson: Word('отпечатываются', 5),
  masculinePast: Word('отпечатывался', 5),
  femininePast: Word('отпечатывалась', 5),
  neuterPast: Word('отпечатывалось', 5),
  pluralPast: Word('отпечатывались', 5),
  imperativeInformal: Word('отпечатывайся', 5),
  imperativeFormal: Word('отпечатывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отпечатываться.name.text, отпечатываться);

export { отпечатываться };