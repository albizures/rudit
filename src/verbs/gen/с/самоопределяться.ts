import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const самоопределяться: PerfectVerb = {
  name: Word('самоопределяться', 11),
  singular1stPerson: Word('самоопределяюсь', 11),
  singular2ndPerson: Word('самоопределяешься', 11),
  singular3rdPerson: Word('самоопределяется', 11),
  plural1stPerson: Word('самоопределяемся', 11),
  plural2ndPerson: Word('самоопределяетесь', 11),
  plural3rdPerson: Word('самоопределяются', 11),
  masculinePast: Word('самоопределялся', 11),
  femininePast: Word('самоопределялась', 11),
  neuterPast: Word('самоопределялось', 11),
  pluralPast: Word('самоопределялись', 11),
  imperativeInformal: Word('самоопределяйся', 11),
  imperativeFormal: Word('самоопределяйтесь', 11),
  imperfect: [],
};

perfectVerbs.set(самоопределяться.name.text, самоопределяться);

export { самоопределяться };