import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скатываться: PerfectVerb = {
  name: Word('скатываться', 2),
  singular1stPerson: Word('скатываюсь', 2),
  singular2ndPerson: Word('скатываешься', 2),
  singular3rdPerson: Word('скатывается', 2),
  plural1stPerson: Word('скатываемся', 2),
  plural2ndPerson: Word('скатываетесь', 2),
  plural3rdPerson: Word('скатываются', 2),
  masculinePast: Word('скатывался', 2),
  femininePast: Word('скатывалась', 2),
  neuterPast: Word('скатывалось', 2),
  pluralPast: Word('скатывались', 2),
  imperativeInformal: Word('скатывайся', 2),
  imperativeFormal: Word('скатывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(скатываться.name.text, скатываться);

export { скатываться };